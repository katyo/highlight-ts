export default [
    `CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`,
    `<span class="hljs-keyword">CREATE</span> <span class="hljs-keyword">TABLE</span> <span class="hljs-string">"topic"</span> (
    <span class="hljs-string">"id"</span> <span class="hljs-built_in">serial</span> <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span> PRIMARY <span class="hljs-keyword">KEY</span>,
    <span class="hljs-string">"forum_id"</span> <span class="hljs-built_in">integer</span> <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span>,
    <span class="hljs-string">"subject"</span> <span class="hljs-built_in">varchar</span>(<span class="hljs-number">255</span>) <span class="hljs-keyword">NOT</span> <span class="hljs-literal">NULL</span>
);
<span class="hljs-keyword">ALTER</span> <span class="hljs-keyword">TABLE</span> <span class="hljs-string">"topic"</span>
<span class="hljs-keyword">ADD</span> <span class="hljs-keyword">CONSTRAINT</span> forum_id FOREIGN <span class="hljs-keyword">KEY</span> (<span class="hljs-string">"forum_id"</span>)
<span class="hljs-keyword">REFERENCES</span> <span class="hljs-string">"forum"</span> (<span class="hljs-string">"id"</span>);

<span class="hljs-comment">-- Initials</span>
<span class="hljs-keyword">insert</span> <span class="hljs-keyword">into</span> <span class="hljs-string">"topic"</span> (<span class="hljs-string">"forum_id"</span>, <span class="hljs-string">"subject"</span>)
<span class="hljs-keyword">values</span> (<span class="hljs-number">2</span>, <span class="hljs-string">'D''artagnian'</span>);`
];

export const keywords = [
    `select * from t where t.select is null;`,
    `<span class="hljs-keyword">select</span> * <span class="hljs-keyword">from</span> t <span class="hljs-keyword">where</span> t.select <span class="hljs-keyword">is</span> <span class="hljs-literal">null</span>;`,
];
