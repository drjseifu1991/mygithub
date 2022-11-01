const langColors = {
  TypeScript: '#ff2b2b',
  Mercury: '#2b7489',
  Self: '#5a6986',
  'Objective-C++': '#6866fb',
  PureBasic: '#0579aa',
  NewLisp: '#db5855',
  edn: '#87AED7',
  'Jupyter Notebook': '#DA5B0B',
  Frege: '#358a5b',
  Rebol: '#00cafe',
  AspectJ: '#00B4AB',
  Dart: '#a957b0',
  xBase: '#89e051',
  'Web Ontology Language': '#9cc9dd',
  Shell: '#403a40',
  Nix: '#946d57',
  Eiffel: '#7e7eff',
  MTML: '#77d9fb',
  RAML: '#b7e1f4',
  Elixir: '#22228f',
  Racket: '#6e4a7e',
  Agda: '#B34936',
  SAS: '#315665',
  D: '#7582D1',
  wisp: '#ba595e',
  Opal: '#F18E33',
  Kotlin: '#f7ede0',
  Crystal: '#776791',
  'Objective-C': '#438eff',
  'ColdFusion CFC': '#ed2cd6',
  Mirah: '#fab738',
  Oz: '#c7a938',
  'Objective-J': '#ff0c5a',
  FreeMarker: '#82937f',
  Gosu: '#0050b2',
  Arc: '#701516',
  'Component Pascal': '#b0ce4e',
  Ruby: '#aa2afe',
  Nit: '#2F2530',
  Brainfuck: '#009917',
  Go: '#5A8164',
  APL: '#375eab',
  'Visual Basic': '#945db7',
  Cirru: '#4F5D95',
  PHP: '#ccccff',
  Glyph: '#3F3F3F',
  SQF: '#e4cc98',
  MAXScript: '#b07219',
  Java: '#00a6a6',
  Makefile: '#DC322F',
  Scala: '#427819',
  Perl: '#ed2cd6',
  ColdFusion: '#0298c3',
  Vue: '#000080',
  Lua: '#2c3e50',
  Factor: '#b2b7f8',
  Verilog: '#636746',
  Forth: '#df7900',
  'Pure Data': '#91de79',
  Haxe: '#341708',
  Hy: '#ee0000',
  Red: '#7790B2',
  Volt: '#1F1F1F',
  LSL: '#3d9970',
  eC: '#913960',
  CoffeeScript: '#244776',
  HTML: '#e44b23',
  Lex: '#DBCA00',
  'API Blueprint': '#2ACCA8',
  Swift: '#ffac45',
  C: '#555555',
  AutoHotkey: '#6594b9',
  Isabelle: '#FEFE00',
  Metal: '#8f14e9',
  Clarion: '#db901e',
  JSONiq: '#40d47e',
  Boo: '#d4bec1',
  AutoIt: '#1C3552',
  Clojure: '#db5855',
  Rust: '#dea584',
  Prolog: '#74283c',
  SourcePawn: '#5c7611',
  AMPL: '#E6EFBB',
  FORTRAN: '#4d41b1',
  ANTLR: '#9DC3FF',
  Harbour: '#0e60e3',
  Tcl: '#e4cc98',
  BlitzMax: '#cd6400',
  PigLatin: '#fcd7de',
  Lasso: '#999999',
  ECL: '#8a1267',
  VHDL: '#adb2cb',
  Elm: '#60B5CC',
  'Propeller Spin': '#7fa2a7',
  X10: '#4B6BEF',
  IDL: '#a3522f',
  ATS: '#1ac620',
  Ada: '#02f88c',
  'Unity3D Asset': '#ab69a1',
  Nu: '#c9df40',
  LFE: '#004200',
  SuperCollider: '#46390b',
  Oxygene: '#cdd0e3',
  ASP: '#6a40fd',
  Assembly: '#6E4C13',
  Gnuplot: '#f0a9f0',
  JFlex: '#DBCA00',
  NetLinx: '#0aa0ff',
  Turing: '#45f715',
  Vala: '#fbe5cd',
  Processing: '#0096D8',
  Arduino: '#bd79d1',
  FLUX: '#88ccff',
  NetLogo: '#ff6375',
  'C Sharp': '#178600',
  CSS: '#563d7c',
  'Emacs Lisp': '#c065db',
  Stan: '#b2011d',
  SaltStack: '#646464',
  QML: '#44a51c',
  Pike: '#005390',
  LOLCODE: '#cc9900',
  ooc: '#b0b77e',
  Handlebars: '#01a9d6',
  J: '#9EEDFF',
  Mask: '#f97732',
  EmberScript: '#FFF4F3',
  TeX: '#3D6117',
  Nemerle: '#3d3c6e',
  KRL: '#28431f',
  'Ren\'Py': '#ff7f7f',
  'Unified Parallel C': '#4e3617',
  Golo: '#88562A',
  Fancy: '#7b9db4',
  OCaml: '#3be133',
  Shen: '#120F14',
  Pascal: '#b0ce4e',
  'F#': '#b845fc',
  Puppet: '#302B6D',
  ActionScript: '#882B0F',
  Diff: '#88dddd',
  'Ragel in Ruby Host': '#9d5200',
  Fantom: '#dbded5',
  Zephir: '#118f9e',
  Click: '#E4E6F3',
  Smalltalk: '#596706',
  DM: '#447265',
  Ioke: '#078193',
  PogoScript: '#d80074',
  LiveScript: '#499886',
  JavaScript: '#f1e05a',
  VimL: '#199f4b',
  PureScript: '#1D222D',
  ABAP: '#E8274B',
  Matlab: '#bb92ac',
  Slash: '#007eff',
  R: '#198ce7',
  Erlang: '#B83998',
  Pan: '#cc0000',
  LookML: '#652B81',
  Eagle: '#814C05',
  Scheme: '#1e4aec',
  PLSQL: '#dad8d8',
  Python: '#3572A5',
  Max: '#c4a79c',
  'Common Lisp': '#3fb68b',
  Latte: '#A8FF97',
  XQuery: '#5232e7',
  Omgrofl: '#cabbff',
  XC: '#99DA07',
  Nimrod: '#37775b',
  SystemVerilog: '#DAE1C2',
  Chapel: '#8dc63f',
  Groovy: '#e69f56',
  Dylan: '#6c616e',
  E: '#ccce35',
  Parrot: '#f3ca0a',
  'Grammatical Framework': '#79aa7a',
  'Game Maker Language': '#8fb200',
  Papyrus: '#6600cc',
  'NetLinx+ERB': '#747faa',
  Clean: '#3F85AF',
  Alloy: '#64C800',
  Squirrel: '#800000',
  PAWN: '#dbb284',
  UnrealScript: '#a54c4d',
  'Standard ML': '#dc566d',
  Slim: '#ff8f77',
  Perl6: '#0000fb',
  Julia: '#a270ba',
  Haskell: '#29b544',
  NCL: '#28431f',
  Io: '#a9188d',
  Rouge: '#cc0088',
  'C++': '#f34b7d',
  'AGS Script': '#B9D9FF',
  Dogescript: '#cca760',
  nesC: '#94B0C7',
};

export default langColors;
