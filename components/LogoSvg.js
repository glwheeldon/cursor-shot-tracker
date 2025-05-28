const LogoSvg = ({ className = "", width = 40, height = 40 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={width} height={height} className={className}>
      {/* Flowing curved shape resembling the teal logo */}
      <path
        d="M100 30c-10 0-20 5-25 15-5 10-5 25 5 35s25 10 35 5c10-5 15-15 15-25s-5-20-15-25c-5-5-10-5-15-5z"
        fill="#2DD4BF"
      />
      <path
        d="M130 80c-10 0-20 5-25 15-5 10-5 25 5 35s25 10 35 5c10-5 15-15 15-25s-5-20-15-25c-5-5-10-5-15-5z"
        fill="#0BA89C"
      />
      <path
        d="M70 80c-10 0-20 5-25 15-5 10-5 25 5 35s25 10 35 5c10-5 15-15 15-25s-5-20-15-25c-5-5-10-5-15-5z"
        fill="#4ECDC4"
      />
    </svg>
  )
}

export default LogoSvg
