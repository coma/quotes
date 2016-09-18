export default  {
    quote: () => fetch('/quote').then(response => response.json())
};