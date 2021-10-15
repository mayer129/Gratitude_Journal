export default function History({gratitudes}) {
    return (
        <p className="text-white text-2xl">Prevously, you were grateful for
        <span className="font-bold">
            {gratitudes.map(g => ' '+g).toString()}</span>
        </p>
    )
}