<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{
    public function reorder(Request $request)
    {
        $data = $request->validate([
            'sections' => 'required|array',
        ]);


        $sections = collect($data['sections']);

        DB::transaction(function () use ($sections) {
            $sections->each(function ($section, $index) {
                Section::where('site_id', $section['site_id'])
                    ->where('id', $section['id'])
                    ->update(['order' => $index + 1]);
            });
        });
        return back();
    }

    public function update(Request $request, Section $section)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'section' => 'required|string',
            'order' => 'required|integer',
            'props' => 'nullable|string',
        ]);

        $section->name = $validatedData['name'];
        $section->section = $validatedData['section'];
        $section->order = $validatedData['order'];
        $section->props = json_decode($validatedData['props']);
        $section->save();

        return back();
    }
}
