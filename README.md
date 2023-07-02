# adblock-filter-counter

🐲 A dead simple npm module that counts Adblock filter rules.🦘

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/adblock-filter-counter"
```

<br>

## 🤹🏼‍♂️ API

```ts
countRules(rules: string): number
```

Counts Adblock filter rules found in the provided string.

<br>

`rules` - The Adblock filter string to count rules in.

<br>

Returns the number of filter rules.
Throws a `TypeError` if no input is passed or if it's not a string.

<br>
<br>

```ts
countFileRules(path: PathLike): number
```

Counts Adblock filter rules found in the provided file.

<br>

`path` - The path to the file that contains the filter rules to count.

<br>

Returns the number of filter rules.
Throws an `Error` if the given path cannot be found.
