<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SiteController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Settings', [
            'site' => Site::first()
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request, Site $site): RedirectResponse
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'logo' => 'nullable|image|max:2048', // Assuming that logo is an uploaded image
        ]);



        $site->title = $validatedData['title'];
        $site->description = $validatedData['description'];

        if ($request->hasFile('logo')) {
            // If a new logo file is uploaded, delete the old one and store the new one
            Storage::delete($site->logo);
            $path = $request->file('logo')->store('public/logos');
            $site->logo = $path;
        }

        $site->save();

        return back();
    }
}
