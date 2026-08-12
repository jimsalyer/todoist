## Building Todoist from Scratch Using React (Custom Hooks, Context), Firebase & React Testing Library (http://bit.ly/CognitiveSurge)

This application (a Todoist clone) was built using create-react-app as a base, and the technologies used were React (Custom Hooks, Context), Firebase & React Testing Library. I'm hoping this gives people a better understanding of React, and I've also included SCSS in this tutorial, but the main focus is to build a real application using React! If you clone this application, click the Pizza icon on the top right, it enables dark mode!

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!). One thing I didn't get time to do was incorporate accessibility into this application, so I'd love to see that added!

![Preview](todoist-preview.png?raw=true)

## 🎉 TypeScript Migration

This repository has been migrated to TypeScript! The migration was done in phases to maintain backward compatibility. Both JavaScript and TypeScript files coexist in the repository.

**Key improvements:**
- ✅ Full TypeScript support with strict mode
- ✅ Type-safe components, hooks, and context
- ✅ Better IDE support and autocomplete
- ✅ Comprehensive type definitions for all data structures

For detailed information about the migration, see [TYPESCRIPT_MIGRATION.md](TYPESCRIPT_MIGRATION.md).

### Quick Start with TypeScript

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

The TypeScript files (`.ts` and `.tsx`) are the new source of truth. The original JavaScript files are kept for reference and can be removed once you're comfortable with the TypeScript version.
