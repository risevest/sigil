import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.997 18.2294C21.997 18.9572 21.5919 20.3571 20.6823 21.1263C20.5002 21.2667 20.3181 21.187 20.3979 20.983C20.6625 20.3352 21.2694 18.8356 20.985 18.4912C20.7839 18.2294 19.954 18.2485 19.2462 18.3092C18.923 18.3501 18.6393 18.3699 18.4191 18.4136C18.2152 18.4305 18.1736 18.2513 18.3775 18.1109C18.6393 17.926 18.923 17.7855 19.2483 17.6832C20.3979 17.3388 21.7269 17.5461 21.9172 17.7658C21.954 17.8083 21.997 17.926 21.997 18.2294ZM20.0754 19.5244C19.8136 19.7262 19.5299 19.9104 19.2462 20.0734C17.1235 21.3493 14.3748 22.0168 11.9875 22.0168C8.14505 22.0168 4.70765 20.5998 2.10014 18.2294C1.87644 18.0474 2.06133 17.7827 2.32314 17.926C5.13247 19.566 8.6108 20.5582 12.2112 20.5582C14.4772 20.5582 16.9195 20.1341 19.2462 19.2216C19.4085 19.1609 19.5906 19.0784 19.7501 19.0205C20.117 18.8547 20.4395 19.2625 20.0754 19.5244ZM13.9051 8.49485C13.9059 7.45265 13.9472 6.8397 13.6019 6.31359C13.2955 5.88081 12.7691 5.62128 12.0335 5.66194C11.2353 5.70607 10.3784 6.22935 10.1595 7.18824C10.1174 7.40711 9.98855 7.6235 9.72343 7.6714L7.28779 7.36168C7.11352 7.32039 6.84922 7.18824 6.93595 6.8397C7.45875 4.08774 9.81097 3.12884 12.0335 3H12.5563C13.7762 3 15.3438 3.34854 16.3473 4.26448C17.5639 5.40012 17.4342 6.92642 17.4342 8.58487V12.5113C17.4342 13.6891 17.9116 14.211 18.3923 14.8247C18.522 15.0436 18.5666 15.3021 18.3477 15.4797C17.867 15.9149 16.9535 16.6987 16.4307 17.134C16.2565 17.2669 15.9424 17.2811 15.8212 17.1794C15.0514 16.5336 14.8631 16.1759 14.3857 15.5209C13.5565 16.3923 12.8594 16.873 12.0302 17.134C11.5074 17.2669 10.9433 17.3504 10.2462 17.3504C8.15583 17.3504 6.50069 16.0471 6.50069 13.4694C6.50069 11.4211 7.5909 10.0276 9.20062 9.36867C10.8103 8.7097 13.1505 8.49857 13.9051 8.49485ZM13.4277 13.6858C13.9472 12.8144 13.9051 12.0996 13.9051 10.501C13.2534 10.501 12.5985 10.5464 12.0335 10.6786C10.9887 10.9817 10.1595 11.6399 10.1595 13.0341C10.1595 14.1243 10.7269 14.866 11.685 14.866C11.8171 14.866 11.9328 14.8495 12.0335 14.8214C12.7028 14.6346 13.1213 14.2986 13.4277 13.6858Z" />
    </Svg>
  )
}

Icon.displayName = 'AmazonFill'

/**
 * Remix Icon: Amazon Fill
 * @see {@link https://remixicon.com/icon/amazon-fill Remix Icon Docs}
 */
export const AmazonFill = memo(Icon)
