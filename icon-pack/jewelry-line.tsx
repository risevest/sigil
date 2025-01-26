import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.00032 2.90029C9.00032 2.43746 9.31885 2.03489 9.76902 1.9274C11.1648 1.59611 12.8343 1.60081 14.2306 1.92717C14.6765 2.03317 15.0003 2.44174 15.0003 2.90029V5.03783C15.0003 5.32881 15.1686 5.59353 15.4321 5.71698L21.1261 8.38477C21.8713 8.73392 22.196 9.61827 21.8539 10.3667L17.3806 20.1519C17.1443 20.6689 16.6281 21.0005 16.0597 21.0005H7.94102C7.37261 21.0005 6.85644 20.6689 6.62012 20.1519L2.14688 10.3667C1.80474 9.61827 2.12948 8.73393 2.87468 8.38477L8.56853 5.71699C8.83202 5.59353 9.00032 5.32882 9.00032 5.03784V2.90029ZM11.0003 3.78008V5.03763C11.0003 6.10455 10.3832 7.07518 9.41707 7.52785L8.43616 7.98744C9.14194 9.88937 10.5704 11 12.0003 11C13.4303 11 14.8587 9.88937 15.5645 7.98745L14.5836 7.52785C13.6174 7.07518 13.0003 6.10455 13.0003 5.03762V3.78007C12.7366 3.76097 12.4041 3.74658 12.0003 3.74658C11.5965 3.74658 11.264 3.76097 11.0003 3.78008ZM11.3191 12.9536C9.16718 12.6579 7.47502 10.9785 6.62299 8.83698L4.17175 9.98547L8.2928 19.0003H15.7079L19.829 9.98548L17.3777 8.83697C16.5256 10.9785 14.8335 12.6579 12.6815 12.9536L14.189 15.064C14.3752 15.3248 14.3752 15.6751 14.189 15.9359L12.2038 18.7151C12.1041 18.8547 11.8966 18.8547 11.7969 18.7151L9.81171 15.9359C9.62544 15.6751 9.62544 15.3248 9.81171 15.064L11.3191 12.9536Z" />
    </Svg>
  )
}

Icon.displayName = 'JewelryLine'

/**
 * Remix Icon: Jewelry Line
 * @see {@link https://remixicon.com/icon/jewelry-line Remix Icon Docs}
 */
export const JewelryLine = memo(Icon)
