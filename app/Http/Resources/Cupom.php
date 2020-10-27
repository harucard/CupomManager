<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cupom extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title'=>$this->title,
            'expires_in' =>$this->expires_in,
            'quantity' =>$this->quantity,
            'status' =>$this->status,
        ];
    }
}
