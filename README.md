# Framer X / Polymer LitElement Components

This repository is an example of a few components based on the [framer-bridge-starter-kit](https://github.com/framer/framer-bridge-starter-kit) component library, but built entirely using Polymer LitElement Web Components.

These components can be used within any Web Framework, but were designed to illustrate the workflow between maintaining a Web Component based Design System in [Framer X](https://www.framer.com/).

---

## Components

This package contains 4 main components:

### `<my-button />`

A flexible button with multiple props to change the appearance.

| Property | Type      | Description           | Default        |
| -------- | --------- | --------------------- | -------------- |
| text     | `string`  | Button text           | `Download App` |
| fluid    | `boolean` | Width of button       | `true`         |
| disabled | `boolean` | Button disabled state | `false`        |
| kind     | `enum`    | Button Kind           | `default`      |

---

### `<my-input />`

An input field with props to change the appearance.

| Property    | Type      | Description          | Default |
| ----------- | --------- | -------------------- | ------- |
| value       | `string`  | Input value          |         |
| placeholder | `string`  | Input placeholder    | `Email` |
| disabled    | `boolean` | Input disabled state | `false` |
| error       | `boolean` | Input error state    | `false` |

---

### `<my-toggle />`

A usable toggle with props to change it's state.

| Property | Type      | Description           | Default |
| -------- | --------- | --------------------- | ------- |
| disabled | `boolean` | Toggle disabled state | `false` |
| on       | `boolean` | Toggle on state       | `false` |

---

### `<my-tooltip />`

A tooltip with props to change the appearance.

| Property | Type      | Description         | Default     |
| -------- | --------- | ------------------- | ----------- |
| arrow    | `enum`    | Arrow direction     | `left`      |
| text     | `string`  | Tooltip text        | `Component` |
| error    | `boolean` | Tooltip error state | `false`     |

---

## Using Components

Follow the steps below to use these components in your project.

### **Framer X**

Check out this [repository](https://github.com/framer/framer-bridge-polymer-kit) to learn more about how these components are maintained in Framer X, and see a working example of these living in a Framer X project.

Framer X uses React under the hood, but that doesn't mean you can't use your custom Web Components. If you're new to React, a good place to start is [here](https://reactjs.org/docs/getting-started.html).

In order to use Polymer LitElements in Framer X, you need to make sure you `export` the class that is defined in the component file. See [this example](https://github.com/addisonschultz/polymer-framer-components/blob/master/src/my-button.js#L3) for and idea of how this looks.

This way, you can import the component and define the custom element within Framer X. See [`Polymer.tsx`](https://github.com/framer/framer-bridge-polymer-kit/blob/master/code/utils/Polymer.tsx) in this Framer X project to see how you can import all your components at once.
