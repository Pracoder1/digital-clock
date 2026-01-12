# Digital Clock

A sleek, modern digital clock built with vanilla JavaScript that displays real-time updates with customizable time formats and timezone information.

## ✨ Features

- **Real-time Updates**: Updates every second for accurate timekeeping
- **12/24 Hour Format**: Toggle between 12-hour and 24-hour time formats
- **Date Display**: Shows current date with full weekday and month names
- **Timezone Information**: Displays your local timezone
- **Automatic Formatting**: Properly padded numbers (01:02:03 instead of 1:2:3)
- **Responsive Design**: Clean, modern interface with gradient background
- **Real-time Updates**: Clock updates every second automatically

## 🚀 Live Demo

Simply open the HTML file in any modern browser to see the live clock.

## 🛠️ How to Use

1. Open `.html` in your web browser
2. The clock will automatically start showing current time
3. Toggle between 12-hour and 24-hour formats using the buttons
4. Watch the time update in real-time every second


## 🧩 Code Structure

### HTML Components
- Time display area showing hours:minutes:seconds
- Date display with full format
- Timezone information
- Format toggle buttons (12-hour/24-hour)

### JavaScript Functions
- `updateClock()` - Updates time and date display
- `padZero(time)` - Formats single digits with leading zeros
- `setTimeFormat(format)` - Switches between time formats
- `padStart()` - Built-in method for number formatting

### CSS Classes
- `.clock-container` - Main clock wrapper
- `.time` - Large time display
- `.date` - Date information
- `.timezone` - Timezone display
- `.format-toggle` - Format selection buttons

## 🔧 Key JavaScript Concepts Used

- **`Date()` object**: Get current time and date information
- **`setInterval()`**: Update clock every second
- **String formatting**: `padStart()` for consistent number formatting
- **Ternary operators**: Conditional logic for time formats
- **Mathematical operations**: Modulo (`%`) for 12-hour conversion
- **DOM manipulation**: Update display elements
- **Boolean logic**: Handle truthy/falsy values
- **Array methods**: Store days and months names

## 🎨 Styling Features

- Modern gradient background
- Glass-morphism design with backdrop blur
- Large, readable time display
- Responsive layout for all screen sizes
- Smooth animations and transitions
- Professional typography

## 🧮 Time Conversion Logic

The application handles complex time conversions:
- **24-hour to 12-hour**: Uses modulo operator and conditional logic
- **AM/PM determination**: Based on hour values
- **Midnight/Noon handling**: Converts 0 hours to 12 in 12-hour format
- **Leading zero padding**: Ensures consistent formatting

## 🐛 Known Issues

- None currently identified

## 🚧 Future Enhancements

- Add timezone selection
- Implement stopwatch functionality
- Add alarm features
- Include world clocks
- Add dark/light mode toggle

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with vanilla JavaScript to demonstrate core programming concepts including real-time updates, date manipulation, string formatting, and DOM manipulation.
