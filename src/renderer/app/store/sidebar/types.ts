enum PageName {
  Main = 'main',
  Templates = 'templates',
  Structure = 'structure',
}

interface PageKeys {
  [PageName.Main]: number;
  [PageName.Structure]: number;
  [PageName.Templates]: number;
}

interface Settings {
  width: PageKeys;
}

export { PageName };
export type { PageKeys, Settings };
