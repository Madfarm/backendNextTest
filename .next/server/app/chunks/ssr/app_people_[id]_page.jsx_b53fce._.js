(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_people_[id]_page.jsx_b53fce._.js", {

"[project]/app/people/[id]/Pets.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/app/people/[id]/Pets.jsx (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/app/people/[id]/Pets.jsx (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/app/people/[id]/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>ShowPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/people/[id]/Pets.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const getPerson = async (id)=>{
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${id}`);
    return await res.json();
};
async function ShowPage({ params  }) {
    const person = await getPerson(params.id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: [
                    "This is ",
                    person.name
                ]
            }, void 0, true, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                src: person.image,
                width: 200,
                height: 300,
                alt: person.name
            }, void 0, false, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: [
                    "He is a ",
                    person.title
                ]
            }, void 0, true, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 24,
                columnNumber: 17
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$people$2f5b$id$5d2f$Pets$2e$jsx__$28$ecmascript$29$__["default"], {
                person: person
            }, void 0, false, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                href: `people/${params.id}/edit`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    children: "Edit this boyyyy"
                }, void 0, false, {
                    fileName: "<[project]/app/people/[id]/page.jsx>",
                    lineNumber: 26,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/people/[id]/page.jsx>",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_people_[id]_page.jsx_b53fce._.js.map