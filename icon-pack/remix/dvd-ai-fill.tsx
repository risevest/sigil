import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM20 11C20.6695 11 21.3134 10.8903 21.9147 10.688C21.971 11.1174 22 11.5553 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.9056 2 13.7831 2.12039 14.6174 2.34603C14.2221 3.14617 14 4.04715 14 5C14 8.31371 16.6863 11 20 11ZM13 11V6L8 13H11V18L16 11H13Z" />
    </Svg>
  )
}

Icon.displayName = 'DvdAiFill'

/**
 * Remix Icon: Dvd Ai Fill
 * @see {@link https://remixicon.com/icon/dvd-ai-fill Remix Icon Docs}
 */
export const DvdAiFill = memo(Icon)
