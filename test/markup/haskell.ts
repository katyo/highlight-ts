export default [
    `{-# LANGUAGE TypeSynonymInstances #-}
module Network.UDP
( DataPacket(..)
, openBoundUDPPort
, openListeningUDPPort
, pingUDPPort
, sendUDPPacketTo
, recvUDPPacket
, recvUDPPacketFrom
) where

import qualified Data.ByteString as Strict (ByteString, concat, singleton)
import qualified Data.ByteString.Lazy as Lazy (ByteString, toChunks, fromChunks)
import Data.ByteString.Char8 (pack, unpack)
import Network.Socket hiding (sendTo, recv, recvFrom)
import Network.Socket.ByteString (sendTo, recv, recvFrom)

-- Type class for converting StringLike types to and from strict ByteStrings
class DataPacket a where
  toStrictBS :: a -> Strict.ByteString
  fromStrictBS :: Strict.ByteString -> a

instance DataPacket Strict.ByteString where
  toStrictBS = id
  {-# INLINE toStrictBS #-}
  fromStrictBS = id
  {-# INLINE fromStrictBS #-}

openBoundUDPPort :: String -> Int -> IO Socket
openBoundUDPPort uri port = do
  s <- getUDPSocket
  bindAddr <- inet_addr uri
  let a = SockAddrInet (toEnum port) bindAddr
  bindSocket s a
  return s

pingUDPPort :: Socket -> SockAddr -> IO ()
pingUDPPort s a = sendTo s (Strict.singleton 0) a >> return ()`,
    `<span class="hljs-meta">{-# LANGUAGE TypeSynonymInstances #-}</span>
<span class="hljs-keyword">module</span> Network.UDP
( <span class="hljs-type">DataPacket(..)</span>
, <span class="hljs-title">openBoundUDPPort</span>
, <span class="hljs-title">openListeningUDPPort</span>
, <span class="hljs-title">pingUDPPort</span>
, <span class="hljs-title">sendUDPPacketTo</span>
, <span class="hljs-title">recvUDPPacket</span>
, <span class="hljs-title">recvUDPPacketFrom</span>
) <span class="hljs-keyword">where</span>

<span class="hljs-keyword">import</span> <span class="hljs-keyword">qualified</span> Data.ByteString <span class="hljs-keyword">as</span> Strict (<span class="hljs-type">ByteString</span>, <span class="hljs-title">concat</span>, <span class="hljs-title">singleton</span>)
<span class="hljs-keyword">import</span> <span class="hljs-keyword">qualified</span> Data.ByteString.Lazy <span class="hljs-keyword">as</span> Lazy (<span class="hljs-type">ByteString</span>, <span class="hljs-title">toChunks</span>, <span class="hljs-title">fromChunks</span>)
<span class="hljs-keyword">import</span> Data.ByteString.Char8 (<span class="hljs-title">pack</span>, <span class="hljs-title">unpack</span>)
<span class="hljs-keyword">import</span> Network.Socket <span class="hljs-keyword">hiding</span> (<span class="hljs-title">sendTo</span>, <span class="hljs-title">recv</span>, <span class="hljs-title">recvFrom</span>)
<span class="hljs-keyword">import</span> Network.Socket.ByteString (<span class="hljs-title">sendTo</span>, <span class="hljs-title">recv</span>, <span class="hljs-title">recvFrom</span>)

<span class="hljs-comment">-- Type class for converting StringLike types to and from strict ByteStrings</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-type">DataPacket</span> a <span class="hljs-keyword">where</span></span>
  toStrictBS :: a -&gt; <span class="hljs-type">Strict</span>.<span class="hljs-type">ByteString</span>
  fromStrictBS :: <span class="hljs-type">Strict</span>.<span class="hljs-type">ByteString</span> -&gt; a
<span class="hljs-class">
<span class="hljs-keyword">instance</span> <span class="hljs-type">DataPacket</span> <span class="hljs-type">Strict</span>.<span class="hljs-type">ByteString</span> <span class="hljs-keyword">where</span></span>
  toStrictBS = id
  <span class="hljs-meta">{-# INLINE toStrictBS #-}</span>
  fromStrictBS = id
  <span class="hljs-meta">{-# INLINE fromStrictBS #-}</span>

<span class="hljs-title">openBoundUDPPort</span> :: <span class="hljs-type">String</span> -&gt; <span class="hljs-type">Int</span> -&gt; <span class="hljs-type">IO</span> <span class="hljs-type">Socket</span>
<span class="hljs-title">openBoundUDPPort</span> uri port = <span class="hljs-keyword">do</span>
  s &lt;- getUDPSocket
  bindAddr &lt;- inet_addr uri
  <span class="hljs-keyword">let</span> a = <span class="hljs-type">SockAddrInet</span> (toEnum port) bindAddr
  bindSocket s a
  return s

<span class="hljs-title">pingUDPPort</span> :: <span class="hljs-type">Socket</span> -&gt; <span class="hljs-type">SockAddr</span> -&gt; <span class="hljs-type">IO</span> ()
<span class="hljs-title">pingUDPPort</span> s a = sendTo s (<span class="hljs-type">Strict</span>.singleton <span class="hljs-number">0</span>) a &gt;&gt; return ()`
];

export const infix = [
    `infix 3 \`foo\`
infixl 6 \`bar\`
infixr 9 \`baz\``,
    `<span class="hljs-keyword">infix</span> <span class="hljs-number">3</span> \`foo\`
<span class="hljs-keyword">infixl</span> <span class="hljs-number">6</span> \`bar\`
<span class="hljs-keyword">infixr</span> <span class="hljs-number">9</span> \`baz\``
];

export const nested_comments = [
    `{- this is a {- nested -} comment -}`,
    `<span class="hljs-comment">{- this is a <span class="hljs-comment">{- nested -}</span> comment -}</span>`
];
