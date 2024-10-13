<?php

namespace App\Http\Controllers;

use App\Events\ContactUsEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactUsFormController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'mobil_number' => 'required',
            'email_address' => 'required',
        ]);

        event(new ContactUsEvent($data));

    return redirect()->back()->with(['message' => 'User registered successfully!']);

    }
}
