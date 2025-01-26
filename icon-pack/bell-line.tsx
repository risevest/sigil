import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.1213 9.87865C18.4171 14.1744 20.9497 18.6066 19.7782 19.7782C19.3031 20.2532 18.2918 20.1192 16.971 19.5055C13.746 21.6451 9.44716 21.4873 6.38175 19.032L6.34315 19.071L4.92893 17.6568L4.96734 17.6174C2.51262 14.5521 2.35503 10.2537 4.49456 7.03005C3.88075 5.70797 3.74678 4.69685 4.22183 4.2218C5.34959 3.09404 9.49865 5.39866 13.639 9.40425L14.1213 9.87865ZM12.7071 11.2929C10.823 9.40876 8.86963 7.84195 7.23581 6.86954L7.05025 7.05023C4.55691 9.54357 4.33771 13.4499 6.39266 16.1917L8.23943 14.3462C8.06128 13.679 8.23392 12.9376 8.75736 12.4142C9.53841 11.6331 10.8047 11.6331 11.5858 12.4142C12.3668 13.1952 12.3668 14.4616 11.5858 15.2426C11.0626 15.7658 10.3218 15.9385 9.65487 15.7608L7.80749 17.6067C10.5493 19.6623 14.4562 19.4433 16.9497 16.9497L17.1286 16.7623L17.076 16.6734C16.1001 15.0582 14.5564 13.1422 12.7071 11.2929ZM19.7782 4.2218C20.5592 5.00285 20.5592 6.26918 19.7782 7.05023C19.7254 7.10299 19.6704 7.1522 19.6135 7.19783C21.2057 9.71504 21.4267 12.8522 20.276 15.5426C19.8994 14.8064 19.4347 14.0317 18.8899 13.2368C19.2795 11.0596 18.6326 8.73308 16.9497 7.05023C15.2669 5.36737 12.9404 4.72049 10.7627 5.10957C9.96765 4.56488 9.19311 4.10029 8.45731 3.72447C11.1478 2.57335 14.2849 2.79427 16.8039 4.38695C16.8478 4.32955 16.897 4.27457 16.9497 4.2218C17.7308 3.44075 18.9971 3.44075 19.7782 4.2218Z" />
    </Svg>
  )
}

Icon.displayName = 'BellLine'

/**
 * Remix Icon: Bell Line
 * @see {@link https://remixicon.com/icon/bell-line Remix Icon Docs}
 */
export const BellLine = memo(Icon)
