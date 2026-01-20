import { memo } from 'react'
import Svg, { Defs, Image, G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Loading4Line = /* @__PURE__ */ memo(function Loading4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Defs>
        <Image
          id="a"
          width={20}
          height={20}
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAACtUlEQVQ4EZ2TTY7UMBCFn8t20j3MsEL8LNjNDeYMLGCLOA0H4EZwmdnDCgkNYrrTsYuvnEFCLBBN1C0nsev5e6+ctL9+4zrzur/9WHT9uujbfdUjFZ1y1sS4WrYzteTy99KN6UfJansbYjsEEVNL5wsebj990PVT0/I166JDhdjiJcQ0/Qeh9G6ju6wb1fQgVlXm1Us517L0vehAXroqqoeq6mWXpuJtyUifZ5lmmJ61ov1SlQ+0odb5VKvnVt1KVaulOFfi+jfSm6K5TnKflfM0J0MIrlXQrVldVpTSic6ZNtn8V+Enu5182WNxR+3kC2TYlDWjOabSjGPjJ8QWhBZgD4if3NX+FB529xdXc8lXPbdL9+XCp75j3exKs1uavFktaROLemzzIwFPSg/UQTwRSNbLVy+q2fPWNXMYM5ZNnZU8ULbVylJ0Oeh+XTHLKlhDU4P0yM3neZreem9fTPlIeVPrnbhiDZcxrgzJC9VYpn4IeCzqRNAoWiEjAt0B8SW5vxAfA5vdddcRjVXJmnrv9LSPejYIwtMmQo/E372xIDZZ6NM9DHeIBuWcen/sxG7eK5ssPZE/LogcEOtBXWKCbRHzThDRjJXi2ORIRge2P473kaNHA/pe0UtOhjkncDgJR/zNEJSvUGwvGGkGYbAJGyVD1AnHRxREnwpSExuGRabEByyLeIDLRNTKg71hlQXkMuyGlRNZrahAHeFzhFPKZFmDmNg9SCGOBJkYUBxsiljYGEcj4jlsIxHWEYMOhAABLGiAopk8IM5hCFEw4uh079Hl38W4J4KUIKU5iu6NZoHnARKq8c88lx4vyQg5ysYMH3oQ/S46LHrDSIMgBAOAYVzc8JlifasZI5KDkak0At0Iwx62I1gEsAPZOF9DMPYPMU59UI5vPxv3uMazcwJ6bJJ/Aoy/k5VHVQn8AAAAAElFTkSuQmCC"
        />
      </Defs>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M7.885 6.337A1.5 1.5 0 1 1 6.122 3.91a1.5 1.5 0 0 1 1.763 2.427M3.452 10.8a1.5 1.5 0 1 0 .927-2.853 1.5 1.5 0 0 0-.927 2.853m1.89 3.363a1.5 1.5 0 1 1-2.853.927 1.5 1.5 0 0 1 2.854-.927Zm2.875 5.595a1.5 1.5 0 1 0-2.427-1.763 1.5 1.5 0 0 0 2.427 1.763M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.21-1.005a1.5 1.5 0 1 0-2.427 1.763 1.5 1.5 0 0 0 2.427-1.763m.447-3.832a1.5 1.5 0 1 1 2.853.927 1.5 1.5 0 0 1-2.853-.927m.963-6.216a1.5 1.5 0 1 0 .927 2.853 1.5 1.5 0 0 0-.927-2.853m-3.506-1.61a1.5 1.5 0 1 1 1.764-2.427 1.5 1.5 0 0 1-1.764 2.427"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Loading 4 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Loading4Line }
