# Tailwindcss-pseudo-selectors

Plugin for Tailwind CSS that adds all the different pseudo selectors as variants

![GitHub package.json version](https://img.shields.io/github/package-json/v/microwawe/tailwindcss-pseudo-selectors) [![GitHub license](https://img.shields.io/github/license/Microwawe/tailwindcss-pseudo-selectors)](https://github.com/Microwawe/tailwindcss-pseudo-selectors/blob/master/LICENSE) ![npm bundle size](https://img.shields.io/bundlephobia/min/tailwindcss-pseudo-selectors) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![GitHub issues](https://img.shields.io/github/issues/Microwawe/tailwindcss-pseudo-selectors)](https://github.com/Microwawe/tailwindcss-pseudo-selectors/issues) 
[![Twitter](https://img.shields.io/twitter/url?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FMicrowawe%2Ftailwindcss-pseudo-selectors)

## Installation

### NPM

```sh
npm install tailwindcss-pseudo-selectors --save-dev
```

### Yarn

```sh
yarn add tailwindcss-pseudo-selectors -D
```

## Usage

### Configuration

Add the plugin to your `tailwind.config.js` (after you've installed it as described in the [installation instructions](https://github.com/Microwawe/tailwindcss-pseudo-selectors)). And then add each of the variants from this package that you want to use to the Tailwind CSS utilities to enable them in your build.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ..
  },
  variants: {
    extend: {
      ringColor: ['valid', 'invalid'],
    },
  },
  plugins: [
    //..
    require('tailwindcss-pseudo-selectors'),
  ],
};
```

### HTML

Then in your HTML you can use the variants as any of the official ones like `hover:` or `dark:`

```html
<div class="space-x-8">
  <input type="email" value="Invalid input" class="ring-2 ring-offset-2 invalid:ring-red-500" />
  <input type="text" value="Valid input" class="ring-2 ring-offset-2 valid:ring-green-500" />
</div>
```

And the result would look like this:

![Result](./pseudo-example.png)

## Pseudo-classes

A CSS _pseudo-class_ is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user's pointer hovers over it.

> NOTE: Tailwind already has some of the most common pseudo-classes like `:focus` and `:hover` but some of them are not enabled by default. You can check out the [Tailwind CSS documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) for more detailed information about those.

The following pseudo-classes are currently supported in this package:

- :any-link
- :blank
- :checked
- :current
- :default
- :defined
- :dir
- :drop
- :empty
- :enabled
- :first
- :first-of-type
- :fullscreen
- :future
- :host
- :indeterminate
- :in-range
- :invalid
- :lang
- :last-of-type
- :left
- :link
- :local-link
- :only-child
- :only-of-type
- :optional
- :out-of-range
- :past
- :picture-in-picture
- :placeholder-shown
- :read-only
- :read-write
- :required
- :right
- :root
- :scope
- :target
- :target-within
- :user-invalid
- :valid

For more detailed information about which CSS properties can be used with each of these, please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Pseudo-elements

A CSS _pseudo-element_ is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, `::first-line` can be used to change the font of the first line of a paragraph.

The following pseudo-elements are currently supported in this package:

- ::after
- ::before
- ::cue
- ::cue-region
- ::first-letter
- ::first-line
- ::file-selector-button
- ::selection

For more detailed information about which CSS properties can be used with each of these, please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

### License

MIT
