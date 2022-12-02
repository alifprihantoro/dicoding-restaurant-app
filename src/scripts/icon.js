export const fullStarIcon = () => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
      />
    </svg>
  `
}
export const emtyStarIcon = () => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="m8.85 17.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425ZM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275ZM12 13.25Z"
      />
    </svg>
  `
}
export const iconClose = () => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        d="M3.4 22L2 20.6L8.6 14H4v-2h8v8h-2v-4.6ZM12 12V4h2v4.6L20.6 2L22 3.4L15.4 10H20v2Z"
      />
    </svg>
  `
}

export const iconStar = (rating) => {
  if (rating < 5) {
    return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.025 20.775A.998.998 0 0 0 6 22a1 1 0 0 0 .555-.168L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107l-1.491 6.452zM12 5.429l2.042 4.521l.588.047h.001l3.972.315l-3.271 2.944l-.001.002l-.463.416l.171.597v.003l1.253 4.385L12 15.798V5.429z"
      />
    </svg>
  `
  }
  return fullStarIcon()
}
export const iconMap = () => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512"><path fill="white" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
  `
}
