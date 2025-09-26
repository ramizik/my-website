# Technology Logos

This folder contains SVG logos for technologies used in the TechStackSection.

## File Format
- **Use SVG format** for all logos
- **Naming convention**: Use lowercase with hyphens (e.g., `react.svg`, `node-js.svg`, `next-js.svg`)
- **Size**: Optimize for web use (typically 24x24px to 64x64px viewBox)
- **Colors**: Use brand colors when possible, but ensure good contrast

## Current Logos
- `react.svg` - React logo
- `typescript.svg` - TypeScript logo  
- `nodejs.svg` - Node.js logo

## Adding New Logos

1. **Find the official SVG logo** from the technology's official website or brand guidelines
2. **Optimize the SVG**:
   - Remove unnecessary metadata
   - Ensure proper viewBox (usually 0 0 24 24 or 0 0 64 64)
   - Use appropriate fill colors
3. **Save with descriptive filename** (e.g., `python.svg`, `aws.svg`, `docker.svg`)
4. **Update TechStackSection.tsx** to reference the new logo path

## Logo Sources
- [React](https://react.dev/community/versioning-policy)
- [TypeScript](https://www.typescriptlang.org/branding)
- [Node.js](https://nodejs.org/en/about/resources/)
- [Python](https://www.python.org/community/logos/)
- [AWS](https://aws.amazon.com/architecture/icons/)
- [Docker](https://www.docker.com/company/newsroom/media-resources)

## Best Practices
- Keep file sizes small (< 5KB when possible)
- Use consistent styling across all logos
- Ensure logos are readable at small sizes (24px)
- Test logos in both light and dark themes
