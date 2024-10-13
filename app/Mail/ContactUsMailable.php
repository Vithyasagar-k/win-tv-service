<?php

namespace App\Mail;

use App\Events\ContactUsEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactUsMailable extends Mailable
{
    use Queueable, SerializesModels;
    
    public $data;
    public $isAdmin;

    public function __construct($data, $isAdmin = false)
    {
        $this->data = $data;
        $this->isAdmin = $isAdmin;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Us Mailable',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: $this->isAdmin ? 'email.contact-us-admin' : 'email.contact-us-user',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
