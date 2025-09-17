<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-adblock-filter-counter/main/media/adblock-filter-counter.png" alt="Ad-block Filter Counter icon for counting rules in EasyList and uBlock filter files" width="256" height="256">
  <h1>Ad-block Filter Counter</h1>
</div>

<blockquote align="center">
  Count filter rules in ad-block lists • Syntax‑agnostic and format‑flexible • Built for maintainers and testers • Fast, dependency‑free utility
</blockquote>

<h4 align="center">
  🐲 A lightweight npm module for counting ad-block filter rules, ultra-simple, fast, and perfect for list maintainers, filter testers, and privacy tool developers.🦘
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- ⚡ Counts ad-block rules from strings or files instantly  
- 🧠 Ignores comments and metadata for clean totals  
- 🧼 Syntax-agnostic - no parser, no dependencies  
- 📁 Reads UTF-8 files with a single call  
- 🧪 Type-safe - returns exact rule count as number  
- 🚫 Throws clear errors for invalid input or missing files  
- 🧵 Works with EasyList, [**AdVoid**](https://github.com/the-advoid/ad-void), and custom filters  
- 🧩 Ideal for audits, benchmarks, and list hygiene  
- 🐇 Fast - handles tens of thousands of rules in milliseconds  
- 🔒 No network, no fetch, no async - pure local logic

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/adblock-filter-counter
```

```bash
yarn add @igorskyflyer/adblock-filter-counter
```

```bash
npm i @igorskyflyer/adblock-filter-counter
```

<br>
<br>

## 🤹🏼 API


```ts
countRules(rules: string): number
```

Counts ad-block filter rules found in the provided string.

<br>

`rules` - The ad-block filter string to count rules in.  

Throws if the input is not a string.  
Returns the number of filter rules.

<br>
<br>

```ts
countFileRules(path: PathLike): number
```

Counts ad-block filter rules found in the provided file.

<br>

`path` - The path to the file that contains the filter rules to count.  

Throws if the file cannot be read or is not a valid UTF-8 string.  
Returns the number of filter rules.

<br>
<br>

## 🗒️ Examples

`index.ts`
```ts
import { countFileRules, countRules } from '@igorskyflyer/adblock-filter-counter'

const total: number = countFileRules('./easylist.txt')
console.log(`EasyList contains ${total} rules.`) // EasyList contains 73800 rules.

const raw: string = `
||ads.example.com^
||tracker.net^
! this is a comment
##.ad-banner
`
const count: number = countRules(raw)
console.log(`Inline list contains ${count} rules.`) // Inline list contains 3 rules.
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-adblock-filter-counter/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-adblock-filter-counter/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igor.dvlpr/aria**](https://www.npmjs.com/package/@igor.dvlpr/aria)

> _🧬 Meet Aria, an efficient ad-block filter list compiler, with many features that make your maintenance of ad-block filter lists a breeze! 🦖_

<br>

[**@igor.dvlpr/adblock-header-extract**](https://www.npmjs.com/package/@igor.dvlpr/adblock-header-extract)

> _✂️ An npm module that provides ways to extract header and metadata from an ad-block filter file. 📃_

<br>

[**@igor.dvlpr/strip-html**](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[**@igor.dvlpr/astro-saferesource**](https://www.npmjs.com/package/@igor.dvlpr/astro-saferesource)

> _🎐 Adds CSP-compliant inline scripts and styles to Astro! 🎠_

<br>

[**@igor.dvlpr/astro-easynav-button**](https://www.npmjs.com/package/@igor.dvlpr/astro-easynav-button)

> _🧭 Add an easy-to-use navigational button (jump to top/bottom) to your Astro site. 🔼_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
