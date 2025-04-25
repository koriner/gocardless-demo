declare namespace NodeJS {
  export interface ProcessEnv {
    // Define ENV vars for Node here.
    EXAMPLE_ITEM: string;
  }
}

export declare global {
  interface Window {
    // Stuff can go here for analytics etc that may exist on the window/document etc
    stop_complaining_ts: unknown;
  }
}
