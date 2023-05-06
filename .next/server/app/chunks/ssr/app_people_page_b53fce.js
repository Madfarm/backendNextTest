(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_people_page_b53fce.js", {

"[project]/app/people/page.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>PeopleIndex
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const getPeopleData = async ()=>{
    const response = await fetch('https://sei221-mern-api-test.herokuapp.com/people', {
        next: {
            revalidate: 10
        }
    });
    return response.json();
};
async function PeopleIndex() {
    const people = await getPeopleData();
    const mapped = people.map((peep, idx)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    href: `/people/${peep._id}`,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            children: peep.name
                        }, void 0, false, {
                            fileName: "<[project]/app/people/page.js>",
                            lineNumber: 18,
                            columnNumber: 48
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/people/page.js>",
                    lineNumber: 18,
                    columnNumber: 13
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                    src: peep.image,
                    alt: "A cute mans",
                    width: 200,
                    height: 300
                }, void 0, false, {
                    fileName: "<[project]/app/people/page.js>",
                    lineNumber: 19,
                    columnNumber: 13
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    children: peep.title
                }, void 0, false, {
                    fileName: "<[project]/app/people/page.js>",
                    lineNumber: 20,
                    columnNumber: 13
                }, this)
            ]
        }, idx, true, {
            fileName: "<[project]/app/people/page.js>",
            lineNumber: 17,
            columnNumber: 9
        }, this);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: "People Index"
            }, void 0, false, {
                fileName: "<[project]/app/people/page.js>",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            mapped
        ]
    }, void 0, true, {
        fileName: "<[project]/app/people/page.js>",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_people_page_b53fce.js.map