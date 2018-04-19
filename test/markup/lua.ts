export default [
    `--[[
Simple signal/slot implementation
]]
local signal_mt = {
    __index = {
        register = table.insert
    }
}
function signal_mt.__index:emit(... --[[ Comment in params ]])
    for _, slot in ipairs(self) do
        slot(self, ...)
    end
end
local function create_signal()
    return setmetatable({}, signal_mt)
end

-- Signal test
local signal = create_signal()
signal:register(function(signal, ...)
    print(...)
end)
signal:emit('Answer to Life, the Universe, and Everything:', 42)

--[==[ [=[ [[
Nested ]]
multi-line ]=]
comment ]==]
[==[ Nested
[=[ multi-line
[[ string
]] ]=] ]==]`,
    `<span class="hljs-comment">--[[
Simple signal/slot implementation
]]</span>
<span class="hljs-keyword">local</span> signal_mt = {
    <span class="hljs-built_in">__index</span> = {
        register = <span class="hljs-built_in">table</span>.<span class="hljs-built_in">insert</span>
    }
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">signal_mt.__index:emit</span><span class="hljs-params">(... <span class="hljs-comment">--[[ Comment in params ]]</span>)</span></span>
    <span class="hljs-keyword">for</span> _, slot <span class="hljs-keyword">in</span> <span class="hljs-built_in">ipairs</span>(self) <span class="hljs-keyword">do</span>
        slot(self, ...)
    <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span>
<span class="hljs-keyword">local</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create_signal</span><span class="hljs-params">()</span></span>
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">setmetatable</span>({}, signal_mt)
<span class="hljs-keyword">end</span>

<span class="hljs-comment">-- Signal test</span>
<span class="hljs-keyword">local</span> signal = create_signal()
signal:register(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(signal, ...)</span></span>
    <span class="hljs-built_in">print</span>(...)
<span class="hljs-keyword">end</span>)
signal:emit(<span class="hljs-string">\'Answer to Life, the Universe, and Everything:\'</span>, <span class="hljs-number">42</span>)

<span class="hljs-comment">--[==[ [=[ [[
Nested ]]
multi-line ]=]
comment ]==]</span>
<span class="hljs-string">[==[ Nested
[=[ multi-line
[[ string
]] ]=] ]==]</span>`
];
