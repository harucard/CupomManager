<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Cupom as CupomResource;
use App\Models\Cupom;
class CupomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CupomResource::collection(Cupom::all());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' =>'required',
            'expires_in' => 'required',
            'quantity' => 'required',
            'status' => 'required'
        ]);
        $cupom = new Cupom([
            'title'=> $request->title,
            'expires_in'=> $request->expires_in,
            'quantity'=> $request->quantity,
            'status'=> $request->status,
            
        ]);
        $cupom ->save();
        return response()->json([
            'data'=>'Cupom Criado'
        ]);
    }
    /** 
     * Show the form for editing the espedified resource.
     * 
     *@param int $id
     *@return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new CupomResource(Cupom::findOrFail($id));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' =>'required',
            'expires_in' => 'required',
            'quantity' => 'required',
            'status' => 'required'
        ]);
        $cupom = Cupom::findOrFail($id);
        $cupom-> title = $request->title;
        $cupom->expires_in = $request->expires_in;
        $cupom-> quantity = $request->quantity;
        $cupom-> status = $request->status;
        $cupom ->save();
        return response()->json([
            'data'=>'Cupom editado'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cupom = Cupom::findOrFail($id);
        $cupom -> delete();

        return response()->json([
            'data'=>'Cupom deletado'
        ]);
    }
}
