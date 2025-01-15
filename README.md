# Movie List

## Input
The user engages with a web interface showcasing a compilation of films. Every film entry comprises the title, genre, and year of release. Users may also choose a certain genre from a dropdown menu to refine the selection.

## Procedure
1. **Initialization**: The component commences with a predetermined array of movie objects, each encompassing a title, genre, and release year.
2. **State Management**: The component utilizes React's `useState` hook to govern the state of the chosen genre. The default selected genre is "All Genres."
3. **Genre Selection**: The user may choose a genre from a dropdown menu. The dropdown presents "All Genres" and distinct genres derived from the movie list.
4. **Filtering Logic**: The movie list is dynamically filtered according to the chosen genre. When "All Genres" is chosen, the complete catalog of films is presented. Alternatively, only films that correspond to the chosen genre are displayed.
5. **Movie Click Event**: Each film on the list is interactive. Upon a user's click on a movie entry, an alert is activated, showcasing the title of the chosen film.
6. **Rendering**: The component displays the dropdown menu for genre selection and a list of films according to the filtering criteria. Each film submission is designed to augment user engagement and aesthetic attractiveness.

## Output -
**Filtered Movie List**: The component generates a dynamically filtered list of movies based on the selected genre from the dropdown menu. Users can effortlessly transition between genres to get films of particular categories.
- **Film Selection Notification**: Upon clicking a movie item, an alert box appears, displaying the title of the chosen film. This prompt feedback improves the interactive experience, clarifying the selected movie.

The `MovieList` component consolidates various features, providing an interactive and engaging method for users to explore and filter movies, so assuring a seamless and straightforward user experience.
