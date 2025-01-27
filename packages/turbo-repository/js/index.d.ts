/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class Package {
  name: string;
  /** The absolute path to the package root. */
  readonly absolutePath: string;
  /** The relative path from the workspace root to the package root. */
  readonly relativePath: string;
}
export class PackageManager {
  /** The package manager name in lower case. */
  readonly name: string;
}
export class Workspace {
  /** The absolute path to the workspace root. */
  readonly absolutePath: string;
  /** `true` when the workspace is a multi-package workspace. */
  readonly isMultiPackage: boolean;
  /** The package manager used by the workspace. */
  readonly packageManager: PackageManager;
  /**
   * Finds the workspace root from the given path, and returns a new
   * Workspace.
   */
  static find(path?: string | undefined | null): Promise<Workspace>;
  /** Finds and returns packages within the workspace. */
  findPackages(): Promise<Array<Package>>;
  findPackagesAndDependents(): Promise<Record<string, Array<string>>>;
}
