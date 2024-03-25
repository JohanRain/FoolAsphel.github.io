import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t,b as p,f as e}from"./app-_Us5wM1p.js";const o={},c=p("p",null,"一些基本算法的补充知识。",-1),l=e(`<h2 id="区间合并" tabindex="-1"><a class="header-anchor" href="#区间合并" aria-hidden="true">#</a> 区间合并</h2><p>区间合并是指对给定的一组区间进行合并，将其中重叠且连续的区间合并成一个或多个新的区间。</p><p>先按照区间左端点进行排序，然后从左到右遍历区间，如果相邻两个区间有重叠部分，则将它们合并成一个更大的区间。具体实现可以考虑使用一个辅助栈来存储区间，遍历到一个新的区间时，判断它是否与栈顶区间有重叠部分，如果有，则将它们合并成一个更大的区间再压入栈中，否则直接将新区间压入栈中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">merge_intervals</span><span class="token punctuation">(</span>intervals<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 根据区间左端点排序</span>
    intervals<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>intervals<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> stack <span class="token keyword">or</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果集合为空或者当前区间与栈顶区间不重叠，则将当前区间压入栈中</span>
            stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 否则将当前区间与栈顶区间合并成一个更大的区间</span>
            stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">(</span>stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> stack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function u(i,k){return s(),a("div",null,[c,t(" more "),l])}const m=n(o,[["render",u],["__file","0x0A.html.vue"]]);export{m as default};