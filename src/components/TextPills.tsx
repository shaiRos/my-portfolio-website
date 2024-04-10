export function TextPillsContainer({ children }) {
    return (
        <div className="flex flex-wrap gap-2 my-4">
            {children}
        </div>
    )
}


export function TextPill({ children }) {
    return (
        <div className="bg-white rounded-3xl px-4 py-0.5 pt-1 flex text-md">
            {children}
        </div>
    )
}