# MaidsForUs

MaidsForUs is a service booking application that allows users to book various services such as cleaning, maintenance, and other household services. The application provides a user-friendly interface to view booking history, book new services, and manage existing bookings.

## Features

- **Booking Services**: Users can book services by selecting a date and time slot.
- **Booking History**: Users can view their booking history, including upcoming and completed bookings.
- **User Authentication**: Secure user authentication using NextAuth.
- **Responsive Design**: The application is designed to be responsive and works on both desktop and mobile devices.

## Components

### BookingSection

The `BookingSection` component allows users to select a date and time slot to book a service. It uses the `Calendar` component for date selection and provides available time slots for the selected date.

### BookingHistoryList

The `BookingHistoryList` component displays the user's booking history. It shows details such as the business name, contact person, address, service date, and time.

### MyBooking

The `MyBooking` component is the main page where users can view their booking history. It uses the `Tabs` component to switch between upcoming and completed bookings.

## API Integration

The application integrates with a global API service (`GlobalApi`) to fetch booking data and manage bookings. It uses the `useSession` hook from NextAuth to get the authenticated user's session data.

## Installation

1. Clone the repository:
   ```bash
   https://github.com/dhananjaysable370/Maidsforus.git
   ```
2. Install dependencies:
   ```bash
   cd maidsforus
   npm install
   ```
3. Set up environment variables for authentication and API services.

4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- Navigate to the home page to view available services.
- Use the booking section to select a date and time slot for the desired service.
- View your booking history on the "My Bookings" page.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
