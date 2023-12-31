const MarkerIcon = ({
  width = "26",
  height = "40",
  color = "#EF4324",
}: TSVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 0C9.68479 0 6.50537 1.31696 4.16117 3.66117C1.81696 6.00537 0.5 9.18479 0.5 12.5C0.5 25 13 40 13 40C13 40 25.5 25 25.5 12.5C25.5 9.18479 24.183 6.00537 21.8388 3.66117C19.4946 1.31696 16.3152 0 13 0V0ZM13 20C11.0109 20 9.10322 19.2098 7.6967 17.8033C6.29018 16.3968 5.5 14.4891 5.5 12.5C5.5 10.5109 6.29018 8.60322 7.6967 7.1967C9.10322 5.79018 11.0109 5 13 5C14.9891 5 16.8968 5.79018 18.3033 7.1967C19.7098 8.60322 20.5 10.5109 20.5 12.5C20.5 14.4891 19.7098 16.3968 18.3033 17.8033C16.8968 19.2098 14.9891 20 13 20Z"
        fill={color}
      />
    </svg>
  );
};

export { MarkerIcon };
