import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5611 12.0985L21.0926 14.7501C22.0591 16.4241 21.4855 18.5647 19.8115 19.5312C19.2794 19.8384 18.6759 20.0001 18.0615 20.0001L15.9993 19.9995V22.0001L10.9993 18.5001L15.9993 15.0001V16.9995L18.0615 17.0001C18.1493 17.0001 18.2355 16.977 18.3115 16.9331C18.5241 16.8104 18.6124 16.5551 18.5325 16.332L18.4945 16.2501L16.9631 13.5985L19.5611 12.0985ZM7.73617 9.38407L8.26726 15.4642L6.53571 14.4645L5.50412 16.2501C5.46023 16.3261 5.43713 16.4123 5.43713 16.5001C5.43713 16.7456 5.614 16.9497 5.84725 16.992L5.93713 17.0001L8.99919 16.9997V19.9996L5.93713 20.0001C4.00413 20.0001 2.43713 18.4331 2.43713 16.5001C2.43713 15.8857 2.59885 15.2822 2.90604 14.7501L3.93763 12.9645L2.20508 11.9642L7.73617 9.38407ZM13.7493 2.96901C14.2814 3.2762 14.7232 3.71803 15.0304 4.2501L16.061 6.03629L17.7935 5.03599L17.2624 11.1161L11.7314 8.53599L13.4629 7.53629L12.4323 5.7501C12.3884 5.67409 12.3253 5.61097 12.2493 5.56708C12.0367 5.44435 11.7715 5.49546 11.6182 5.67629L11.5663 5.7501L10.0356 8.40209L7.4376 6.90216L8.96822 4.2501C9.93472 2.57607 12.0753 2.00251 13.7493 2.96901Z" />
    </Svg>
  )
}

Icon.displayName = 'RecycleFill'

/**
 * Remix Icon: Recycle Fill
 * @see {@link https://remixicon.com/icon/recycle-fill Remix Icon Docs}
 */
export const RecycleFill = memo(Icon)
