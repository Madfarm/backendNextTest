(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_people_[id]_edit_page.jsx_b53fce._.js", {

"[project]/app/people/[id]/edit/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>EditPeople
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function EditPeople({ params  }) {
    const res = await fetch(`https://sei221-mern-api-test.herokuapp.com/people/${params.id}`);
    const person = await res.json();
    async function editSubmit(formData) {
        'use server';
        url = `https://sei221-mern-api-test.herokuapp.com/people/${params.id}`;
        options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        };
        const res = fetch(url, options);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$28$ecmascript$29$__["revalidatePath"](`/people/${params.id}/edit`);
        return res.json();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: [
                    "Edit ",
                    person.name,
                    "'s details "
                ]
            }, void 0, true, {
                fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
                action: editSubmit,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                        children: "Name"
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        name: "name",
                        type: "text",
                        defaultValue: person.name
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                        children: "Image Url"
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        name: "image",
                        type: "text",
                        defaultValue: person.image
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                        children: "Title"
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                        name: "title",
                        type: "text",
                        defaultValue: person.title
                    }, void 0, false, {
                        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/people/[id]/edit/page.jsx>",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/people/[id]/edit/page.jsx>",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_people_[id]_edit_page.jsx_b53fce._.js.map