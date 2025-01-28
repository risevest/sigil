import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1661)">
        <Path
          d="M18.2605 18.2607C18.2605 18.2607 5.86914 34.1449 5.85742 34.142C9.47664 37.7613 14.4767 39.9999 19.9996 39.9999C31.0452 39.9999 39.9996 31.0455 39.9996 19.9999L18.2605 18.2607Z"
          fill="#338AF3"
        />
        <Path
          d="M18.2605 19.9999C18.2605 19.9999 5.86914 5.85502 5.85742 5.85783C9.47664 2.23853 14.4767 -6.10352e-05 19.9996 -6.10352e-05C31.0452 -6.10352e-05 39.9996 8.95431 39.9996 19.9999H18.2605Z"
          fill="#6DA544"
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C5.8573 34.1454 40 20 40 20L5.85785 5.85779Z"
          fill="#D80027"
        />
        <Path
          d="M10.435 11.7391C6.59914 11.7391 3.47852 14.8598 3.47852 18.6956V21.3043C3.47852 25.1402 6.59922 28.2608 10.435 28.2608C14.2708 28.2608 17.3915 25.1401 17.3915 21.3043V18.6956C17.3916 14.8598 14.2709 11.7391 10.435 11.7391ZM14.7828 21.3044C14.7828 23.2475 13.5014 24.8966 11.7393 25.452V22.6087L13.5849 20.7631L11.7403 18.9185L11.7393 18.262V17.3914H9.1307V20L7.28633 21.8443L9.1307 23.6886V25.4521C7.36859 24.8967 6.08719 23.2476 6.08719 21.3044V18.6958C6.08719 16.2984 8.03766 14.348 10.435 14.348C12.8323 14.348 14.7828 16.2984 14.7828 18.6958V21.3044Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1661">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Eritrea'

/**
 * Flags by `Deji.Zeal`: Eritrea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Eritrea = memo(Icon)
