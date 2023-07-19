# Slider Component Usage Documentation

The Slider component provides a customizable slider to display content as slides.

## Installation

To use the Slider component in your project, make sure you have React installed and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import Slider from './Slider'; // Specify the path to the Slider.js file
```

## Usage

```jsx
<Slider>
  {/* Your slides go here */}
</Slider>
```

## Props

The Slider component supports the following props to customize its appearance and behavior:

1. `width` (string, optional): Sets the width of the slider. For example, "600px".

2. `height` (string, optional): Sets the height of the slider. For example, "300px".

3. `slideBackgroundColor` (string, optional): Sets the background color of the slides. For example, "lightblue".

4. `arrowColor` (string, optional): Sets the color of the slide navigation arrows. For example, "darkblue".

5. `arrowSize` (string, optional): Sets the size of the slide navigation arrows. For example, "40px".

6. `leftArrowPosition` (string, optional): Sets the position of the left arrow. For example, "20px".

7. `rightArrowPosition` (string, optional): Sets the position of the right arrow. For example, "20px".

8. `arrowsPlacement` (string, optional): Sets the placement of the slide navigation arrows. Possible values: "top", "bottom", "middle". Default: "middle".

9. `sliderPosition` (string, optional): Sets the position of the slider inside its container. For example, "center".

10. `sliderPositionType` (string, optional): Sets the type of positioning for the slider. Possible values: "relative", "absolute", "fixed". Default: "relative".

11. `sliderPositionOffset` (object, optional): Allows setting additional offsets for the slider. For example, `{ top: '20px', left: '30px' }`.

12. `sliderPositionOffsetPreset` (string, optional): Predefined offset values for different slider positioning types. Possible values: "top", "bottom", "left", "right". Default: None.

13. `showPagination` (boolean, optional): Controls the visibility of pagination (dots below the slider to switch between slides). Default: false.

14. `slideAnimationDuration` (string, optional): Sets the duration of slide transition animation. For example, "0.5s". Default: "0.3s".

15. `autoScroll` (boolean, optional): Controls automatic scrolling of slides. If set to true, slides will auto-scroll. Default: false.

16. `autoScrollDelay` (number, optional): Delay before automatic slide scrolling in milliseconds. For example, 5000 for a 5-second delay. Default: 3000 (3 seconds).

17.'PaginActive' (string,optional): Color of active dot in pagination menu. Default: 'rgba(0, 0, 0, 0.9)'

18.'PaginBack' (string,optional): Color of background inactive dot in pagination menu. Default: ''rgba(0, 0, 0, 0.5)'

19. 'PaginSize' (string,optional): Size of pagination menu. Default (10)

## Example using all props

```jsx
<Slider
  width='500px'
  height='400px'
  slideBackgroundColor="violet"
  arrowSize='40px'
  arrowBackgroundColor='aqua'
  arrowColor='#000'
  arrowBackColor="cyan"
  leftArrowPosition="20px"
  rightArrowPosition="20px"
  arrowsPlacement="middle"
  sliderPositionType="absolute"
  sliderPositionOffsetPreset="right"
  showPagination={true}
  slideAnimationDuration='0.2s'
  autoScroll={true}
  autoScrollDelay={5000}
  PaginActive="#fff"
  PaginBack="#000"
  PaginSize={20}
>
  {/* Your slides go here */}
</Slider>
```

You can use the Slider component's props to customize its appearance and behavior according to your needs.