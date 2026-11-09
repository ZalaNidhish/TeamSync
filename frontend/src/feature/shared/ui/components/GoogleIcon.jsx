const GoogleIcon = props => (
  <svg
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={// Preserve any className passed from the Button component and add sizing defaults
    `${props.className ?? ''}`}
    width={20}
    height={20}
  >
    <path
      d="M533.5 278.4c0-17.9-1.6-35.1-4.6-51.8H272v97.9h146.9c-6.4 34.5-26.6 63.8-56.6 83.5v69.1h91.5c53.5-49.3 84.2-122 84.2-198.7z"
      fill="#4285F4"
    />
    <path
      d="M272 543.6c76.5 0 140.7-25.4 187.6-68.9l-91.5-69.1c-25.4 17-58 26.9-96.1 26.9-73.9 0-136.5-49.9-158.9-117.2H18.9v73.8C65.9 479.6 160.2 543.6 272 543.6z"
      fill="#34A853"
    />
    <path
      d="M113.1 315.3c-10.5-31.4-10.5-65.1 0-96.5V144.9H18.9c-38.8 76.7-38.8 165.5 0 242.2l94.2-71.8z"
      fill="#FBBC05"
    />
    <path
      d="M272 107.5c41.4-.6 81.1 15.5 111.3 44.5l83.4-81.8C418.5 21.9 346.6-4.1 272 0 160.2 0 66 64 18.9 144.9l94.2 71.9C135.5 157.5 198.1 107.5 272 107.5z"
      fill="#EA4335"
    />
  </svg>
);

export default GoogleIcon;
