<h1 align="center">
	<br>
	<img width="400" src="logo.svg" alt="XO">
	<br>
	<br>
</h1>

## Linter for JavaScript, TypeScript, JSX, and more

[![Build Status](https://travis-ci.com/danielhuang/eslint-config-lemon.svg?branch=master)](https://travis-ci.com/danielhuang/eslint-config-lemon) ![Build Status](https://img.shields.io/badge/code%20style-lemon-yellow)

Opinionated ESLint configuration with lots of goodies included. Enforces strict and readable code. Never discuss code style on a pull request again! No decision-making. It just works!

## Features

- Zero-config with easy installation.
- Enforces readable code, because you read more code than you write.
- No need to specify file paths to lint as it lints all JS files except for [commonly ignored paths](#ignores).
- Includes `prettier` with automatic formatting.
- Compatible with editor plugins.

## Installation

### Automatic installation

```sh
npx add-eslint # for JavaScript and JSX
npx add-eslint --ts # for TypeScript
npx add-eslint --tsx ## for TypeScript + React
```

### Manual installation

Install `eslint-config-lemon` to your project:

```sh
npm i -D eslint-config-lemon
yarn add -D eslint-config-lemon
```

