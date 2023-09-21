{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system:
    let pkgs = import nixpkgs { inherit system; }; in {
      devShell = with pkgs; with python3Packages; mkShell {
        buildInputs = [
          mkdocs
          mkdocs-material
        ];
      };
    });
}
