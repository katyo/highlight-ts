export default [
    `cmake_minimum_required(VERSION 2.8.8)
project(cmake_example)

# Show message on Linux platform
if (\${CMAKE_SYSTEM_NAME} MATCHES Linux)
    message("Good choice, bro!")
endif()

# Tell CMake to run moc when necessary:
set(CMAKE_AUTOMOC ON)
# As moc files are generated in the binary dir,
# tell CMake to always look for includes there:
set(CMAKE_INCLUDE_CURRENT_DIR ON)

# Widgets finds its own dependencies.
find_package(Qt5Widgets REQUIRED)

add_executable(myproject main.cpp mainwindow.cpp)
qt5_use_modules(myproject Widgets)`,
    `<span class="hljs-keyword">cmake_minimum_required</span>(VERSION <span class="hljs-number">2.8</span>.<span class="hljs-number">8</span>)
<span class="hljs-keyword">project</span>(cmake_example)

<span class="hljs-comment"># Show message on Linux platform</span>
<span class="hljs-keyword">if</span> (<span class="hljs-variable">\${CMAKE_SYSTEM_NAME}</span> <span class="hljs-keyword">MATCHES</span> Linux)
    <span class="hljs-keyword">message</span>(<span class="hljs-string">"Good choice, bro!"</span>)
<span class="hljs-keyword">endif</span>()

<span class="hljs-comment"># Tell CMake to run moc when necessary:</span>
<span class="hljs-keyword">set</span>(CMAKE_AUTOMOC <span class="hljs-keyword">ON</span>)
<span class="hljs-comment"># As moc files are generated in the binary dir,</span>
<span class="hljs-comment"># tell CMake to always look for includes there:</span>
<span class="hljs-keyword">set</span>(CMAKE_INCLUDE_CURRENT_DIR <span class="hljs-keyword">ON</span>)

<span class="hljs-comment"># Widgets finds its own dependencies.</span>
<span class="hljs-keyword">find_package</span>(Qt5Widgets REQUIRED)

<span class="hljs-keyword">add_executable</span>(myproject main.cpp mainwindow.cpp)
<span class="hljs-keyword">qt5_use_modules</span>(myproject Widgets)`
];
