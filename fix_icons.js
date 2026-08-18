const fs = require('fs');
let code = fs.readFileSync('js/react-map.jsx', 'utf8');

// Update imports
code = code.replace(
  "import { Home, Search, Map as MapIcon, X, Maximize, User, BookOpen, ChevronRight, Layers } from 'lucide-react';",
  "import { Home, Search, Map as MapIcon, X, Maximize, User, BookOpen, ChevronRight, Layers, Users, Maximize2 } from 'lucide-react';"
);

fs.writeFileSync('js/react-map.jsx', code);
