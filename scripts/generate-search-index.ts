#!/usr/bin/env tsx
/**
 * Script om automatisch een search index te genereren uit de app directory
 * Run met: npx tsx scripts/generate-search-index.ts
 */

import fs from 'fs';
import path from 'path';

type SearchItem = {
  title: string;
  href: string;
  section: string;
  type?: string;
  description?: string;
  keywords?: string[];
};

const searchIndex: SearchItem[] = [];

// Mapping van routes naar secties
const SECTION_MAPPING: Record<string, string> = {
  '/': 'Over Stiefkompas',
  '/methode': 'Over Stiefkompas',
  '/wetenschappelijke-basis': 'Over Stiefkompas',
  '/publicaties': 'Over Stiefkompas',
  '/faq': 'Over Stiefkompas',
  '/voor-coaches': 'Voor coaches',
  '/training-certificering': 'Voor coaches',
  '/materialen-tools': 'Voor coaches',
  '/ontwikkelaar': 'Voor coaches',
  '/inschrijven': 'Voor coaches',
  '/opleiding': 'Voor coaches',
  '/portaal': 'Portaal',
  '/contact': 'Algemeen',
  '/login': 'Account',
  '/privacy': 'Algemeen',
  '/algemene-voorwaarden': 'Algemeen',
};

// Type bepalen op basis van route
function determineType(route: string): string {
  if (route.startsWith('/materialen-tools/') && route !== '/materialen-tools') return 'Tool';
  if (route.startsWith('/portaal/')) return 'Portaal';
  if (route.startsWith('/opleiding/')) return 'Opleiding';
  if (route.includes('/faq')) return 'FAQ';
  return 'Pagina';
}

// Sectie bepalen op basis van route
function determineSection(route: string): string {
  for (const [prefix, section] of Object.entries(SECTION_MAPPING)) {
    if (route === prefix || route.startsWith(prefix + '/')) {
      return section;
    }
  }
  return 'Algemeen';
}

// Route naar title converteren
function routeToTitle(route: string): string {
  const parts = route.split('/').filter(Boolean);
  if (parts.length === 0) return 'Home';
  
  const lastPart = parts[parts.length - 1];
  return lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Recursief door directory lopen en page.tsx bestanden vinden
function scanDirectory(dir: string, baseDir: string = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(entry.name)) {
        scanDirectory(fullPath, baseDir);
      }
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      // Converteer filepath naar route
      const relativePath = path.relative(baseDir, dir);
      let route = '/' + relativePath.replace(/\\/g, '/');
      
      // Verwijder route groups zoals (portaal)
      route = route.replace(/\/\([^)]+\)/g, '');
      
      // Root route
      if (route === '/' || route === '') route = '/';
      
      // Lees de file om metadata te extraheren (optioneel)
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      // Probeer title uit metadata te halen
      const metadataMatch = content.match(/title:\s*["']([^"']+)["']/);
      const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);
      
      const title = metadataMatch ? metadataMatch[1] : routeToTitle(route);
      const description = descriptionMatch ? descriptionMatch[1] : undefined;
      
      searchIndex.push({
        title,
        href: route,
        section: determineSection(route),
        type: determineType(route),
        description,
        keywords: extractKeywords(title, description),
      });
    }
  }
}

// Extract keywords uit title en description
function extractKeywords(title: string, description?: string): string[] {
  const keywords: string[] = [];
  
  // Voeg belangrijke woorden uit title toe
  keywords.push(...title.toLowerCase().split(/\s+/));
  
  // Voeg woorden uit description toe
  if (description) {
    const descWords = description.toLowerCase().split(/\s+/);
    // Alleen substantieven en belangrijke woorden (> 4 letters)
    keywords.push(...descWords.filter(word => word.length > 4));
  }
  
  return [...new Set(keywords)]; // Remove duplicates
}

// Main functie
function main() {
  const appDir = path.join(process.cwd(), 'app');
  
  if (!fs.existsSync(appDir)) {
    console.error('❌ App directory niet gevonden!');
    process.exit(1);
  }
  
  console.log('🔍 Scannen van app directory...');
  scanDirectory(appDir, appDir);
  
  console.log(`✅ ${searchIndex.length} pagina's gevonden`);
  
  // Sorteer op section en dan op title
  searchIndex.sort((a, b) => {
    if (a.section !== b.section) {
      return a.section.localeCompare(b.section);
    }
    return a.title.localeCompare(b.title);
  });
  
  // Genereer TypeScript bestand
  const output = `// Auto-generated search index
// Generated on: ${new Date().toISOString()}
// Total items: ${searchIndex.length}

export type SearchItem = {
  title: string;
  href: string;
  section: string;
  type?: string;
  description?: string;
  keywords?: string[];
};

export const SEARCH_INDEX: SearchItem[] = ${JSON.stringify(searchIndex, null, 2)};
`;
  
  const outputPath = path.join(process.cwd(), 'lib', 'search-index.ts');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output);
  
  console.log(`📝 Search index geschreven naar: ${outputPath}`);
  
  // Print overzicht
  console.log('\n📊 Overzicht per sectie:');
  const sections = new Map<string, number>();
  searchIndex.forEach(item => {
    sections.set(item.section, (sections.get(item.section) || 0) + 1);
  });
  sections.forEach((count, section) => {
    console.log(`   ${section}: ${count} items`);
  });
}

main();