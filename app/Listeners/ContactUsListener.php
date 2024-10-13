<?php

namespace App\Listeners;

use App\Events\ContactUsEvent;
use App\Mail\ContactUsMailable;
use Illuminate\Support\Facades\Mail;

class ContactUsListener
{
   
    public function __construct()
    {
        //
    }

    public function handle(ContactUsEvent $event)
    {
        $data = $event->data;

        Mail::to(config('mail.from.address'))->send(new ContactUsMailable($data, true));
  
        Mail::to($data->email_address)->send(new ContactUsMailable($data));
    }
}
