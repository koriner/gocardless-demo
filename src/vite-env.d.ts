/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXAMPLE_ITEM: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}