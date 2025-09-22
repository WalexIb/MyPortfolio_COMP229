/* File: ProjectCard.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/


import React from 'react';

// ProjectCard component to display individual project details
export default function ProjectCard({ title, summary, tech }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700 text-sm">{summary}</p>
            {tech && <div className="mt-3 flex flex-wrap gap-2">{tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>)}</div>}
        </div>
    );
}