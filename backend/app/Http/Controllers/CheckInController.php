<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCheckInRequest;
use App\Http\Requests\UpdateCheckInRequest;
use App\Models\CheckIn;

class CheckInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCheckInRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCheckInRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function show(CheckIn $checkIn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCheckInRequest  $request
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCheckInRequest $request, CheckIn $checkIn)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckIn $checkIn)
    {
        //
    }
}
