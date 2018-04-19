export default [
    `n = 20; % number of points
points = [random('unid', 100, n, 1), random('unid', 100, n, 1)];
len = zeros(1, n - 1);
points = sortrows(points);
%% Initial set of points
plot(points(:,1),points(:,2));
for i = 1: n-1
    len(i) = points(i + 1, 1) - points(i, 1);
end
while(max(len) > 2 * min(len))
    [d, i] = max(len);
    k = on_margin(points, i, d, -1);
    m = on_margin(points, i + 1, d, 1);
    xm = 0; ym = 0;
%% New point
    if(i == 1 || i + 1 == n)
        xm = mean(points([i,i+1],1))
        ym = mean(points([i,i+1],2))
    else
        [xm, ym] = dlg1(points([k, i, i + 1, m], 1), ...
            points([k, i, i + 1, m], 2))
    end

    points = [ points(1:i, :); [xm, ym]; points(i + 1:end, :)];
end

%{
    This is a block comment. Please ignore me.
%}

function [net] = get_fit_network(inputs, targets)
    % Create Network
    numHiddenNeurons = 20;  % Adjust as desired
    net = newfit(inputs,targets,numHiddenNeurons);
    net.trainParam.goal = 0.01;
    net.trainParam.epochs = 1000;
    % Train and Apply Network
    [net,tr] = train(net,inputs,targets);
end

foo_matrix = [1, 2, 3; 4, 5, 6]''';
foo_cell = {1, 2, 3; 4, 5, 6}''.'.';

cell2flatten = {1,2,3,4,5};
flattenedcell = cat(1, cell2flatten{:});`,
    `n = <span class="hljs-number">20</span>; <span class="hljs-comment">% number of points</span>
points = [random(<span class="hljs-string">'unid'</span>, <span class="hljs-number">100</span>, n, <span class="hljs-number">1</span>), random(<span class="hljs-string">'unid'</span>, <span class="hljs-number">100</span>, n, <span class="hljs-number">1</span>)];
len = <span class="hljs-built_in">zeros</span>(<span class="hljs-number">1</span>, n - <span class="hljs-number">1</span>);
points = sortrows(points);
<span class="hljs-comment">%% Initial set of points</span>
plot(points(:,<span class="hljs-number">1</span>),points(:,<span class="hljs-number">2</span>));
<span class="hljs-keyword">for</span> <span class="hljs-built_in">i</span> = <span class="hljs-number">1</span>: n<span class="hljs-number">-1</span>
    len(<span class="hljs-built_in">i</span>) = points(<span class="hljs-built_in">i</span> + <span class="hljs-number">1</span>, <span class="hljs-number">1</span>) - points(<span class="hljs-built_in">i</span>, <span class="hljs-number">1</span>);
<span class="hljs-keyword">end</span>
<span class="hljs-keyword">while</span>(max(len) &gt; <span class="hljs-number">2</span> * min(len))
    [d, i] = max(len);
    k = on_margin(points, <span class="hljs-built_in">i</span>, d, <span class="hljs-number">-1</span>);
    m = on_margin(points, <span class="hljs-built_in">i</span> + <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>);
    xm = <span class="hljs-number">0</span>; ym = <span class="hljs-number">0</span>;
<span class="hljs-comment">%% New point</span>
    <span class="hljs-keyword">if</span>(<span class="hljs-built_in">i</span> == <span class="hljs-number">1</span> || <span class="hljs-built_in">i</span> + <span class="hljs-number">1</span> == n)
        xm = mean(points([i,i+<span class="hljs-number">1</span>],<span class="hljs-number">1</span>))
        ym = mean(points([i,i+<span class="hljs-number">1</span>],<span class="hljs-number">2</span>))
    <span class="hljs-keyword">else</span>
        [xm, ym] = dlg1(points([k, i, i + <span class="hljs-number">1</span>, m], <span class="hljs-number">1</span>), ...
            points([k, i, i + <span class="hljs-number">1</span>, m], <span class="hljs-number">2</span>))
    <span class="hljs-keyword">end</span>

    points = [ points(<span class="hljs-number">1</span>:i, :); [xm, ym]; points(<span class="hljs-built_in">i</span> + <span class="hljs-number">1</span>:<span class="hljs-keyword">end</span>, :)];
<span class="hljs-keyword">end</span>
<span class="hljs-comment">
%{
    This is a block comment. Please ignore me.
%}
</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">[net]</span> = <span class="hljs-title">get_fit_network</span><span class="hljs-params">(inputs, targets)</span></span>
    <span class="hljs-comment">% Create Network</span>
    numHiddenNeurons = <span class="hljs-number">20</span>;  <span class="hljs-comment">% Adjust as desired</span>
    net = newfit(inputs,targets,numHiddenNeurons);
    net.trainParam.goal = <span class="hljs-number">0.01</span>;
    net.trainParam.epochs = <span class="hljs-number">1000</span>;
    <span class="hljs-comment">% Train and Apply Network</span>
    [net,tr] = train(net,inputs,targets);
<span class="hljs-keyword">end</span>

foo_matrix = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>; <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>]''';
foo_cell = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>; <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>}''.'.';

cell2flatten = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>};
flattenedcell = <span class="hljs-built_in">cat</span>(<span class="hljs-number">1</span>, cell2flatten{:});`
];

export const block_comment = [
    `%{ evaluate_this = false; % Evaluated as regular single-line comment
evaluate_this = true;
%}

evaluate_this = true;

%{
This is a multi-line comment
evaluate_this = false;
%{
%}

evaluate_this = true;

%{
Opening (%{) and closing (%}) block comment markers can be within a comment block
%}

evaluate_this = true;

    %{
    Indented block comments can be indented
or not
and whitespace can be added before or after the %{ and %}
  %}   

evaluate_this = true;`,
    `<span class="hljs-comment">%{ evaluate_this = false; % Evaluated as regular single-line comment</span>
evaluate_this = true;
<span class="hljs-comment">%}</span>

evaluate_this = true;
<span class="hljs-comment">
%{
This is a multi-line comment
evaluate_this = false;
%{
%}
</span>
evaluate_this = true;
<span class="hljs-comment">
%{
Opening (%{) and closing (%}) block comment markers can be within a comment block
%}
</span>
evaluate_this = true;
<span class="hljs-comment">
    %{
    Indented block comments can be indented
or not
and whitespace can be added before or after the %{ and %}
  %}   
</span>
evaluate_this = true;`
];
