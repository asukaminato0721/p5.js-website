interface IconProps {
  kind: "arrow" | "code-brackets" | "refresh" | "play" | "stop";
  className?: string;
}
/**
 * Renders an icon
 */
export const Icon = (props: IconProps) => {
  switch (props.kind) {
    case "arrow":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M15.353 0.146446L20.7065 5.5L15.353 10.8536C15.1577 11.0488 14.8411 11.0488 14.6459 10.8536C14.4506 10.6583 14.4506 10.3417 14.6459 10.1464L18.7923 6L4.99951 6C4.72337 6 4.49951 5.77614 4.49951 5.5C4.49951 5.22386 4.72337 5 4.99951 5L18.7923 5L14.6459 0.853553C14.4506 0.658291 14.4506 0.341708 14.6459 0.146446C14.8411 -0.0488155 15.1577 -0.0488155 15.353 0.146446Z"
            fill="black"
          />
        </svg>
      );
    case "code-brackets":
      return (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M13.9764 0.718843C14.0606 0.455859 13.9105 0.193701 13.641 0.133296C13.3716 0.0728911 13.0848 0.237114 13.0006 0.500098L7.87626 16.5001C7.79204 16.7631 7.94219 17.0252 8.21165 17.0856C8.4811 17.146 8.76782 16.9818 8.85205 16.7188L13.9764 0.718843Z"
            fill="black"
          />
          <path
            d="M21.707 8.49999L16.3535 3.14644C16.1582 2.95118 15.8416 2.95118 15.6464 3.14644C15.4511 3.3417 15.4511 3.65828 15.6464 3.85355L20.2928 8.49999L15.6464 13.1464C15.4511 13.3417 15.4511 13.6583 15.6464 13.8535C15.8416 14.0488 16.1582 14.0488 16.3535 13.8535L21.707 8.49999Z"
            fill="black"
          />
          <path
            d="M0.292969 8.49999L5.64652 13.8535C5.84178 14.0488 6.15837 14.0488 6.35363 13.8535C6.54889 13.6583 6.54889 13.3417 6.35363 13.1464L1.70718 8.49999L6.35363 3.85355C6.54889 3.65828 6.54889 3.3417 6.35363 3.14644C6.15837 2.95118 5.84178 2.95118 5.64652 3.14644L0.292969 8.49999Z"
            fill="black"
          />
        </svg>
      );
    case "refresh":
      return (
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3597 0.745963L15.9691 6.75275L9.96235 8.36232C9.69562 8.43379 9.42145 8.2755 9.34998 8.00877C9.2785 7.74204 9.43679 7.46787 9.70353 7.39639L14.0814 6.22329C12.7385 5.02054 10.9658 4.28984 9.02153 4.28986C4.83114 4.28989 1.43412 7.68694 1.43408 11.8774C1.43408 12.1535 1.21022 12.3774 0.934077 12.3774C0.657935 12.3774 0.43408 12.1535 0.434082 11.8774C0.434122 7.13467 4.27885 3.2899 9.02154 3.28986C11.1249 3.28984 13.0522 4.04653 14.545 5.30172L13.3937 1.00477C13.3223 0.738039 13.4806 0.463872 13.7473 0.392404C14.014 0.320936 14.2882 0.47923 14.3597 0.745963Z"
            fill="black"
          />
          <path
            d="M3.3684 18.4804L4.52046 22.7801C4.59193 23.0468 4.43363 23.321 4.1669 23.3924C3.90017 23.4639 3.626 23.3056 3.55453 23.0389L1.94508 17.0321L7.95183 15.4225C8.21856 15.3511 8.49274 15.5093 8.56421 15.7761C8.63568 16.0428 8.47739 16.317 8.21066 16.3885L3.83466 17.5611C5.17757 18.7638 6.95034 19.4945 8.8946 19.4945C13.085 19.4945 16.482 16.0974 16.4821 11.907C16.4821 11.6308 16.7059 11.407 16.9821 11.407C17.2582 11.407 17.4821 11.6308 17.4821 11.907C17.482 16.6497 13.6373 20.4945 8.8946 20.4945C6.79 20.4945 4.86161 19.7369 3.3684 18.4804Z"
            fill="black"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 8L0.5 15.5L0.499999 0.500001L15.5 8Z" fill="black" />
        </svg>
      );
    case "stop":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="black" />
        </svg>
      );
    default:
      return null;
  }
};
