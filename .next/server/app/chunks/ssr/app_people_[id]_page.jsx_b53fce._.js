(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_people_[id]_page.jsx_b53fce._.js", {

"[project]/app/people/[id]/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>ShowPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const getPerson = async (id)=>{
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${id}`, {
        next: {
            revalidate: 10
        }
    });
    return await res.json();
};
async function ShowPage({ params  }) {
    const person = await getPerson(params.id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: person.name
            }, void 0, false, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                src: person.image,
                width: 200,
                height: 300
            }, void 0, false, {
                fileName: "<[project]/app/people/[id]/page.jsx>",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/people/[id]/page.jsx>",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_people_[id]_page.jsx_b53fce._.js.map